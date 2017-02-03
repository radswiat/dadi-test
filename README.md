# Info
I have 2 collections:
- documents
- documentsRows

In documentsRows I store documentId and categoryId ( nested value, not mongodb objectId ).
When making a query for {documentId: "[ID]"} query doesnt work,
but when modifying this value and query as follow: {documentId: "[ID]2"} that works fine, as its not equal to documents._id anymore.

# Queries:
http://127.0.0.1:3001/1.0/presales/documentRows?filter=[{"$match": {"documentId": "5894f8fee21a1704858fda59"}}]
http://127.0.0.1:3001/1.0/presales/documentRows?filter={"documentId": "5894f8fee21a1704858fda59"}

# Endpoint
I tried to do it with endpoint, but it failed too:
dadi-server/workspace/endpoints/1.0/endpoint.getRowsByCategoryId

# MongoDB data
Please find 2 screenshots from the mongodb schema

Thank you!