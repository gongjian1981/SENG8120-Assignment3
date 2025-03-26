# SENG8120 Modern Automated Testing

Version: Alpaca

## Purpose

This repository houses the code we require for examples and assignments.

## Repository Usage

This repository will contain branches of code.

Please refer to your instructor's directions on how to use this repository.

## Branch Usage

**Installing The Dependencies**

You will need to install dependencies by using:

```bash
npm install
```

**Running The Project**

To run the project, you must first build the project:

```bash
npm run build
```

followed by:

```bash
npm start
```

Note:  if you make a change in the production code, you must `build` & `start`.
Otherwise, your changes will not be reflected.

**Running The Tests**

To run the tests, you can use

```bash
npm run test
```

To keep the tests running, you can use

```bash
npm run test -- --watch
```

To run a specific test, you can use

```bash
npm run test [my test name]
```

### Test Runs

- To run test on calculateCanvasDiagonal use

```
npm run test calculateCanvasDiagonal
```

- To run test on calculateCanvasPerimeter use

```
npm run test calculateCanvasPerimeter
```

- To run test on calculateCanvasSize use

```
npm run test calculateCanvasSize
```

- To run test on calculatePaintCost use

```
npm run test calculatePaintCost
```

- To run test on calculateTotalCost use

```
npm run test calculateTotalCost
```

- To run test on convertAreaToSquareFeet use

```
npm run test convertAreaToSquareFeet
```

- To run test on estimatePaintingTime use

```
npm run test estimatePaintingTime
```

- To run test on paintRequiredCalculator use

```
npm run test paintRequiredCalculator
```

- To run test on paintRequiredForMultipleCoats use

```
npm run test paintRequiredForMultipleCoats
```



