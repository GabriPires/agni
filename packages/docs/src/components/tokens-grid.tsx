interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValues?: boolean
}

export function TokensGrid({ tokens, hasRemValues = false }: TokensGridProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValues && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {hasRemValues && <td>{Number(value.replace('rem', '')) * 16}px</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
