/* eslint react/jsx-key: 0 */

import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { mdx } from '@mdx-js/react';
import theme from "prism-react-renderer/themes/vsDark";
import '../../language-tabs.css';


export default ({children, className, live, render}) => {
  const language = className.replace(/language-/, '');


  if (live) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider
          code={children.trim()}
          transformCode={code => '/** @jsx mdx */' + code}
          scope={{mdx}}
        >
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    )
  }

  if (render) {
    return (
      <div style={{marginTop: '40px'}}>
        <LiveProvider code={children}>
          <LivePreview />
        </LiveProvider>
      </div>
    )
  }

  return (
    <Highlight {...defaultProps} code={children.trim()} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className="gatsby-highlight" data-language={language}>
            <pre className={className} style={{...style, padding: '20px', background: '#22232F'}}>
            {tokens.map((line, i) => (
                <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span key={key} {...getTokenProps({token, key})} />
                ))}
                </div>
            ))}
            </pre>
        </div>
      )}
    </Highlight>
  )
}