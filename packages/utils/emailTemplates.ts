import { template } from "lodash"

const STYLE = {
  background: "#f9f9f9",
  text: "#444",
  mainBackground: "#fff",
  buttonBackground: "#346df1",
  buttonBorder: "#346df1",
  buttonText: "#fff",
  baseFont: "Helvetica, Arial, sans-serif",
}

const BASE = `<body style="background: ${STYLE.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${STYLE.mainBackground}; max-width: 600px; margin: auto;">
    <%= content %>
  </table>
</body>`

const TITLE = `
  <%= title %>
  <% if(subtitle) { %><p style="font-size: 16px; padding: 0; margin: 0;"><%= subtitle %></p><% } %>
`

const SECTION = `
  <tr>
    <td align="<%= align %>" style="<%= styles %>">
      <%= content %>
    </td>
  </tr>
`

const LINK = `
  <a href="<%= url %>" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${STYLE.buttonText}; text-decoration: none; padding: 10px 20px; border: 1px solid ${STYLE.buttonBorder}; display: inline-block; font-weight: bold; background-color: ${STYLE.buttonBackground}"><%= text %></a>
`

const Templates = {
  base: template(BASE),
  title: template(TITLE),
  link: template(LINK),
  section: template(SECTION),
}

const EmailTemplates = () => {
  return {
    button: ({ url, text }: { url: string; text: string }) => {
      return Templates.link({ url, text })
    },
    title: ({
      title,
      subtitle = false,
    }: {
      title: string
      subtitle?: string | boolean
    }) => {
      return Templates.section({
        styles: `padding: 10px 0; font-size: 22px; font-family: ${STYLE.baseFont}`,
        align: "center",
        content: Templates.title({ title, subtitle }),
      })
    },
    footer: ({
      content = "If you did not request this email you can safely ignore it.",
    }: {
      content?: string
    }) => {
      return Templates.section({
        styles: "padding: 10px 0; font-size: 12px;",
        align: "center",
        content,
      })
    },
    section: ({
      styles = "padding: 10px 0;",
      align = "center",
      ...others
    }: {
      styles?: string
      align?: "left" | "right" | "center"
      content: string
    }) => {
      return Templates.section({ styles, align, ...others })
    },
    compile: (sections: string[]) => {
      const compiledContent = sections.reduce((compilation, section) => {
        return compilation + section
      }, "")

      return Templates.base({ content: compiledContent })
    },
  }
}

export default EmailTemplates
