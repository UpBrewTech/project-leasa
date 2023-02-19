- This document is still in active development

### Create Property

a User as an Owner can add a retal unit and creates a listing to find a tenant.

```mermaid
sequenceDiagram
    actor O as USER as OWNER
    participant S as SYSTEM as LEASA

    O->>S: add my rental unit
    activate O
    activate S
    S--)O: added the rental unit
    deactivate O
    deactivate S
    O->>S: create a listing to find a tenant
    activate O
    activate S
    S--)O: verify details and images
    deactivate S
    O->>S: approves
    deactivate O
    activate S
    S--)S: creates the approved listing
    S--)O: successfully created the listing
    deactivate S
```

---

### Finding a Property in Listings

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

---

### Tenant Invite

After setting up a Property; owners can

- Invite a Tenant via "Send Invite" button
- Send Invite modal will have email input
- send email
  - title: "Leasa Property"
  - body
    - Check out `{property.name}`
    - include property details
    - include "View Property" link

**Tenant Invite Sequence**

```mermaid
sequenceDiagram
    actor O as OWNER
    participant S as SYSTEM
    actor T as TENANT

    activate O
    O->>S: send a tenant invite
    activate S
    NOTE right of O: with selected Property
    S-)S: create email
    S-)T: send Invite Email
    NOTE right of S: link to Property Page
    S--)O: sent invite notification
    deactivate O
    deactivate S

    %% activate T
    %% T-->>S: accept invite
    %% activate S
    %% alt unregistered user
    %%     S-)T: redirects user to /auth/registration
    %%     T-->>S: successfully registered
    %% end
    %% S-)S: updates contract
    %% S--)O: successful contact notification
    %% S--)T: successful contact notification
    %% deactivate S
    %% deactivate T
```
