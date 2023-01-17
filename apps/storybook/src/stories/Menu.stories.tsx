import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Menu } from 'ui/components/Menu'

export default {
  title: 'Example/Menu',
  component: Menu,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

const STYLE = { height: '50px', marginBottom: '15px' }
const LINKS = [
  { text: 'Home', url: 'javascript:void(0)' },
  { text: 'Dashboard', url: 'javascript:void(0)' },
  { text: 'Contact Us', url: 'javascript:void(0)' },
]

const defaultProps = {
  items: LINKS,
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  variant: 'primary',
  size: 'regular',
  flexJustify: 'start',
}

export const Variants: ComponentStory<typeof Menu> = () => (
  <div>
    <div style={STYLE}>
      <Menu items={LINKS} variant="primary" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} variant="secondary" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} variant="text" />
    </div>
  </div>
)

export const Sizes: ComponentStory<typeof Menu> = () => (
  <div>
    <div style={STYLE}>
      <Menu items={LINKS} size="large" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} size="regular" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} size="small" />
    </div>
  </div>
)

export const flexJustify: ComponentStory<typeof Menu> = () => (
  <div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="start" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="end" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="center" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="between" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="around" />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexJustify="evenly" />
    </div>
  </div>
)

export const flexGap: ComponentStory<typeof Menu> = () => (
  <div>
    <div style={STYLE}>
      <Menu items={LINKS} flexGap={1} />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexGap={2} />
    </div>
    <div style={STYLE}>
      <Menu items={LINKS} flexGap={3} />
    </div>
  </div>
)
