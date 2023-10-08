# Input

## Size

::: demo

input/size

:::

## Clearable

::: demo

input/clearable

:::

## Modifier

::: demo

input/modifier

:::

## API

### Props

| Name                  | Description        | Type                   | Default     |
| --------------------- | ------------------ | ---------------------- | ----------- |
| model-value / v-model | binding value      | `string \| number`     | -           |
| size                  | input size         | `'default' \| 'small'` | `'default'` |
| clearable             | is input clearable | `boolean`              | `false`     |
| outline               | input outline      | `boolean`              | `false`     |

### modelModifiers

| Value      | Description                         |
| ---------- | ----------------------------------- |
| trim       | remove white space at start and end |
| number     | must input number                   |
| capitalize | capitalized the first letter        |

### Events

| Name  | Description   | Params |
| ----- | ------------- | ------ |
| clear | cleared input | -      |
