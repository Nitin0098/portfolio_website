# Adaptive Thermoregulating Fabric (ATRF)
### Technical Documentation — v0.1 (Concept Draft)

## 1. Overview

The Adaptive Thermoregulating Fabric (ATRF) is a smart textile capable of actively heating or cooling itself to keep the wearer comfortable in hot or cold environments. Unlike passive insulation, ATRF senses temperature across the body in real time and responds locally, garment-wide, using an embedded grid of small solid-state thermal modules.

The fabric is built from a large number of independent **modules** wired together in a mesh. Because each module is a self-contained sensing + actuation unit, the fabric degrades gracefully: cutting, tearing, or damaging one region only disables the modules in that region — the rest of the garment keeps regulating temperature normally.

## 2. System Architecture

![Modular grid architecture](architecture_diagram.png)

The fabric is organized as a 2D grid of modules connected to their immediate neighbors by short, flexible interconnects. A master microcontroller communicates with every module over a shared bus, reads back per-module temperature, and commands local heating or cooling.

### 2.1 Block (modular) architecture

- Each module is an independent block with its own sensor and heating/cooling element.
- Modules are linked only to their nearest neighbors (north/south/east/west), forming a mesh rather than a single continuous circuit.
- If the fabric is cut or torn, only the modules whose interconnects are severed lose power/communication. Modules outside the damaged region are unaffected because they don't depend on a single shared trace running through the cut.
- This also simplifies manufacturing and repair: damaged sections can be identified (a module that stops responding on the bus) and, in principle, patched or bypassed without replacing the whole garment.

## 3. Module Specification

| Parameter | Description |
|---|---|
| Size | ≈ 0.5 cm × 0.5 cm |
| Sensor | Integrated temperature sensor (local skin/ambient interface reading) |
| Actuator | Peltier element (thermoelectric cooler/heater, TEC) |
| Function | Reads local temperature, drives the Peltier element to heat or cool that patch of fabric as commanded |
| Communication | I2C slave, addressable, connected to shared bus |
| Power | Drawn from the 2-wire power bus shared across the mesh |

Each module operates as a small closed-loop thermal actuator: it can report its sensed temperature to the master controller, and it can be commanded to actively heat or cool until told otherwise. Because the Peltier effect is reversible, a single element handles both heating and cooling depending on drive polarity.

## 4. Interconnect (Wiring)

Each module is linked to its neighbors by **4 conductors**:

1. **Power +**
2. **Power −**
3. **I2C bus SCL** (I2C is not a strict design choice, any communication protocol can be used)
4. **I2C bus SDA**

These interconnects are **loose, stretchable, and flexible**, so the fabric can bend, fold, and stretch with the body without breaking the electrical connection between modules. The wires run through the fabric's inner layer alongside the modules (see Section 5).

The I2C bus allows the master microcontroller to:
- Poll each module's address for its current temperature reading
- Command each module individually (heat / cool / off, and intensity)
- Detect non-responsive modules (e.g., in a torn/damaged region) and route around them

> **Design note:** I2C is a shared-bus protocol, so every module needs a unique address. At garment scale (potentially hundreds of modules), address allocation and bus loading are open engineering questions — see Section 8.

## 5. Fabric Construction

![Fabric cross-section](cross_section_diagram.png)

The fabric is a 3-layer laminate:

1. **Outer layer (top):** protective, weatherproof textile — the visible/outward-facing layer of the garment.
2. **Inner layer (middle):** flexible, **porous** (for breathability), and **thermally conductive**. This is the functional layer — it physically hosts the module grid and the flexible wire interconnects, and it conducts heat from the Peltier elements to (or from) the wearer's skin.
3. **Outer layer (bottom):** the skin-facing layer, also breathable.

The porous middle layer serves two purposes simultaneously: it lets air/moisture pass through for comfort, and its thermally conductive matrix spreads heating/cooling from each 0.5×0.5 cm module across a slightly wider patch of fabric, avoiding sharp hot/cold spots.

## 6. Control Architecture

- A **master microcontroller** sits at the head of the I2C bus (or bus segments, if the design is partitioned into multiple buses for scale).
- Control loop, per module:
  1. Poll module for current temperature.
  2. Compare against target/comfort setpoint (fixed, user-set, or derived from ambient conditions).
  3. Command the module's Peltier element to heat, cool, or idle.
- The result is a garment-wide temperature field that can be held roughly uniform, or intentionally varied (e.g., extra cooling on the back/underarms, extra heating on extremities).

## 7. Additional Features

### 7.1 Thermoelectric energy harvesting
The same Peltier elements that provide active heating/cooling can, in principle, be run in reverse: a temperature gradient between the skin and the outside environment generates a small voltage via the Seebeck effect. This could allow the fabric to scavenge a small amount of electrical energy from body heat — useful as a trickle-charge supplement for onboard electronics, though not expected to fully power the active heating/cooling function.

### 7.2 Distributed body temperature monitoring
Because every module carries its own temperature sensor, the fabric inherently produces a dense, spatially distributed map of skin/body-surface temperature. Over time, this data could be used to:
- Flag asymmetric or abnormal temperature patterns
- Feed into early-warning health monitoring (e.g., fever onset, localized inflammation, circulation issues)
- Support broader wellness or activity-tracking applications

This is a data/analytics layer on top of the core thermal-regulation hardware, and would need its own validation before being used for any health-related claims.

## 8. Open Engineering Questions

This is a concept-stage design. Key areas that need further work before a functional prototype:

- **Bus scaling:** I2C address space and bus capacitance/length limits at hundreds of modules per garment; may require bus segmentation, repeaters, or a different protocol (e.g., a lighter multi-drop bus) for large garments.
- **Power budget:** Peltier elements are power-hungry relative to wearable battery capacity; duty-cycling, insulation, and target ΔT all affect real-world battery life.
- **Washability / durability:** sealing modules and interconnects against water, flexing fatigue on the wire mesh, and connector reliability over repeated wash cycles.
- **Thermal safety limits:** hard limits on skin-contact temperature (both hot and cold) and fail-safe behavior if a module or the controller misbehaves.
- **Module cost and yield:** manufacturability of many small sensor+TEC+I2C modules at a price point viable for clothing.
- **Fault handling:** how the master controller detects, reports, and compensates for a "dead" region of modules (e.g., after a tear) without user intervention.

## 9. Summary

ATRF combines a grid of tiny, independently addressable sensor + Peltier modules, linked by flexible power/I2C interconnects, embedded in a breathable thermally-conductive fabric layer. The modular "block" architecture gives the garment graceful degradation when damaged, while the shared I2C bus gives a master controller fine-grained, per-region control over heating and cooling — with potential secondary uses in energy harvesting and body temperature monitoring.
