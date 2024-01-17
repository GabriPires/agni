import { colors } from '@agni-ui/react/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  const parsed = Object.entries(colors).map(([key, value]) => ({
    color: key,
    values: Object.entries(value).map(([key, value]) => {
      return { shade: key, value }
    }),
  }))

  return parsed.map((color) => (
    <div key={color.color}>
      <h2>{color.color}</h2>
      <div className="flex flex-col">
        {color.values.map((value) => {
          return (
            <div
              key={value.shade}
              className="p-4"
              style={{ background: value.value }}
            >
              <div
                className="flex items-center justify-between"
                style={{
                  backgroundColor: value.value,
                  color:
                    getContrast(value.value, '#FFFFFF') < 3.5
                      ? 'black'
                      : 'white',
                }}
              >
                <span>{value.shade}</span>
                <span>{value.value}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  ))
}
