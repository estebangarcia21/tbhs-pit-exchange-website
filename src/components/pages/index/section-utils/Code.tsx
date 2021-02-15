import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwlLight"
import React from "react"
import Children from "utils/children"

interface CodeProps {
  code: string
  border?: boolean
}

const Line = ({ children }: Children) => (
  <div className="table-row">{children}</div>
)

const LineNo = ({ children }: Children) => (
  <span className="table-cell text-right pr-4 select-none opacity-50">
    {children}
  </span>
)

const LineContent = ({ children }: Children) => (
  <span className="table-cell">{children}</span>
)

const GraphQLCodeBlock = ({ code, border }: CodeProps) => {
  const codeblockClassnames = `text-sm overflow-x-auto py-2 ${
    border && "border-t lg:border-none border-gray-200 border-dashed"
  }`

  return (
    <div className="px-2">
      <Highlight {...defaultProps} theme={theme} code={code} language="graphql">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} ${codeblockClassnames}`} style={style}>
            {tokens.slice(1, -1).map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

const Code = () => {
  const req = `
{
  scammers {
    minecraftAccount {
      username
    }
  }
}
  `

  const res = `
{
  "data": {
    "scammers": [
      {
        "minecraftAccount": {
          "username": "Player123"
        }
      },
      {
        "minecraftAccount": {
          "username": "PlayerABC"
        }
      }
    ]
  }
}
  `

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 text-left">
      <GraphQLCodeBlock code={req} />
      <GraphQLCodeBlock code={res} border />
    </div>
  )
}

export default Code
