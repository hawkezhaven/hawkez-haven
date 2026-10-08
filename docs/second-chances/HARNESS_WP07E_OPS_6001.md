# HARNESS_WP07E_OPS_6001

**Work Package:** WP07-E — The Haven Operations, Care Routines & Physical Interventions  
**Harness Identifier:** HARNESS_WP07E_OPS_6001  
**Target Binary:** sanctuary_ops_engine_x64  
**Execution Cadence:** 60.0 Hz synchronous frame extraction & action processing  
**Status:** Harness specification complete — implementation handoff

## Constitutional Test Invariant

The Haven Operations engine may modify physical-world entities and operational allocations only. It must never directly mutate biological memory registers (WP01), biomechanical strain arrays (WP03), metabolic state vectors (WP04), or expression maps (WP05).

**Causal law:**

Operation(t) → ΔWorldState → biological processing over Δt → ΔBiologicalState

## Test Matrix

### TEST 1 — Downstream Isolation Audit

Execute feed allocation, paddock transfer, cold hosing, hoof care, and grooming operations while protected WP01–WP05 memory regions are read-only.

**Pass conditions**
- 0 unauthorized writes to WP01–WP05.
- 0 bytes written directly to protected biological state.
- Physical-world operation records may be created.

### TEST 2 — Physical Causality & Latency

Alter physical forage allocation and verify that the feeder/world entity changes immediately while biological state does not receive an instantaneous reward.

Advance simulation time and verify downstream ingestion/digestion processes the physical input through the normal biological pipeline.

**Pass conditions**
- Immediate biological shortcut: 0.
- Physical feeder mutation: present.
- Delayed biological processing: present.
- Latency remains governed by configured simulation parameters.

### TEST 3 — Operational Completeness & Staff Skill

Run the same physical preparation task using high-skill/low-fatigue and low-skill/high-fatigue caretaker profiles.

**Pass conditions**
- Physical preparation output may differ.
- Operational completeness may differ.
- No synthetic happiness, health, relationship, pain, or stress attributes are injected.

### TEST 4 — Resource Limitation & Capacity Bounds

Constrain labour capacity and dispatch an intentionally impossible workload.

**Pass conditions**
- Tasks queue, delay, or remain incomplete.
- Capacity warnings may be generated.
- No instantaneous completion or unlimited labour occurs.

### TEST 5 — Individual Response Separation

Apply an identical physical turnout operation to two horses with materially different physical histories.

**Pass conditions**
- Both receive the same operational input.
- WP01–WP05 determine any divergent biological response.
- WP07-E does not select or inject the biological outcome.

### TEST 6 — Evidence Handoff

Perform a physical care operation and verify that WP07-C receives a provenance-bearing operational record.

**Pass conditions**
- Action identity and caretaker provenance are retained.
- The record describes the operation performed.
- The operation does not become a fabricated clinical outcome.

### TEST 7 — Expression Handoff

Change the horse's physical environment through a legitimate WP07-E operation.

**Pass conditions**
- WP07-E does not directly alter expression state.
- World/environment systems process the change.
- Biological systems determine the resulting response.
- WP07-D subsequently observes the resulting expression.

### TEST 8 — Deterministic Replay

Execute the same standard workday input sequence twice.

**Pass conditions**
- Identical operation manifest.
- Identical resulting state hash.
- 0-bit divergence.

## Runtime Gate

The harness is considered runtime validated only after the compiled implementation has executed all eight tests against the actual sanctuary_ops_engine_x64 target and produced a recorded validation report.

A clean specification or compiled test source is **not** itself runtime evidence.

## Expected Runtime Report

The implementation runner should return, at minimum:

- harness identifier
- target binary
- test count
- pass/fail status for TEST 1–8
- unauthorized mutation count
- bytes written to protected biological regions
- deterministic replay/hash result
- failure diagnostics, if any
- final overall result

## Freeze Gate

WP07-E may be marked **FROZEN** only after the runtime report is reviewed and all constitutional gates pass.

Until then:

**Architecture: APPROVED**  
**Harness: AUTHORIZED**  
**Runtime validation: PENDING**  
**Freeze: PENDING**

## Implementation Note

The current hawkezhaven/hawkez-haven repository is the Hawkez Haven web application. This document records the Second Chances harness implementation contract without falsely representing the website's Vitest suite as execution of the future C++ simulation binary.
