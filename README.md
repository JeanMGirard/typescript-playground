# coding-exercise


### Use the CLI

**(no installation needed)**

```shell
node dist/main.ts  ./tests/input.csv  output.json
```

**(with installation)**

```shell
npm link
read-csv  ./tests/input.csv  output.json
```



**Example result**

```json5
[
 {
    "grades": { "bmi": 26.22 },
    "applicant": { "name": "herve", "email": "herve@yahoo.com" },
    "perfectScore": false,
    "followUp": false,
    "success": true,
    "score": -43.5,
    "multiplier": 1.25,
    "reason": [
      "bmi of 26.22",
      "alcohol consumption is higher than 10"
    ],
    "premium": 0.55
  }
  // ...
]
```


