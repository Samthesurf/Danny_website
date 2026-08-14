/**
 * SSR entry used by the static pre-render script. Renders the React app for a
 * given path using a MemoryRouter so we can pre-render real HTML per route
 * (title/meta/JSON-LD and full body content) at build time - the equivalent of
 * the portfolio site's server rendering, minus a live server.
 */
import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

export function renderApp(path: string): string {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}
