# Progress

## Type

::: demo

progress/type

:::

## Indicator

::: demo

progress/indicator

:::

## Color

::: demo

progress/color

:::

## API

### Props

| Name               | Description              | Type                                      | Default     |
| ------------------ | ------------------------ | ----------------------------------------- | ----------- |
| type               | progress type            | `'primary' \| 'warning' \| 'error'`       | `'primary'` |
| progress           | percentage of progress   | `number`                                  | `0`         |
| indicator          | show indicator           | `boolean`                                 | `false`     |
| indicatorFormatter | customize indicator text | `(progress: number): string`              | -           |
| color              | customize color          | `{ color: string, percentage: number }[]` | -           |
