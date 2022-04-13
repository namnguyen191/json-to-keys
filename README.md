# JSON-TO-KEYS

## Installation: `"npm i json-to-keys"`

## A simple JS package that convert a JSON object to a KEY-PATH object

### Example:

```
{
  "info": {
    "first_name": "Nam",
    "last_name": "Nguyen"
  },
  "role": "dev"
}
```

will generate

```
{
  info: {
    first_name: "info.first_name",
    last_name: "info.last_name"
  },
  role: "role"
}
```
