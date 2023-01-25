- This document is still in active development

a User as an Owner can add a retal unit and creates a listing to find a tenant.

```mermaid
sequenceDiagram
    actor O as USER as OWNER
    participant S as SYSTEM as LEASA

    O->>S: add my rental unit
    activate O
    activate S
    S--)O: added the rental unit to the system
    deactivate O
    deactivate S
    O->>S: create a listing to find a tenant
    activate O
    activate S
    S--)O: do you approve the listing details?
    deactivate S
    O->>S: I approve
    deactivate O
    activate S
    S--)S: creates the approved listing
    S--)O: successfully created the listing
    deactivate S
```

a User as a Potential Tenant or Applicant is looking to lease a rental unit.

```mermaid
sequenceDiagram
    actor A as USER as APPLICANT
    participant S as SYSTEM as LEASA

    A->>S: show me the available units based on my filters
    activate A
    activate S
    S--)A: here is a list of units that you might like
    deactivate S
    A-->A: browse through list
    note right of A: can heart or like a listing
    A->>S: apply to this listing
    activate S
    S--)A: application was sent to listing owner
    deactivate A
    deactivate S
```
