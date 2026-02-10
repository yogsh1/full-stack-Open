# My FSO Diagram
# Another Heading

```mermaid
sequenceDiagram
    
    participant browser
    participant server

    

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note)
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: The browser reloads the Notes page


    participant one
    participant two
    
    one->>two: example text
    activate two
    two-->>one: HTML document 2
    deactivate two

    Note left of two: useless note
    
