import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from 'ui/components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button wide={false} {...args} />
)

const defaultProps = {
  children: 'Button',
  danger: false,
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  variant: 'primary',
}

export const Variants: ComponentStory<typeof Button> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="text">Text</Button>
  </div>
)

export const Danger: ComponentStory<typeof Button> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <Button variant="primary" danger>
      Button
    </Button>
    <Button variant="secondary" danger>
      Button
    </Button>
    <Button variant="text" danger>
      Button
    </Button>
  </div>
)

export const Sizes: ComponentStory<typeof Button> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <div>
      <Button variant="primary" size="small">
        Small
      </Button>
    </div>
    <div>
      <Button variant="primary" size="regular">
        Regular
      </Button>
    </div>
    <div>
      <Button variant="primary" size="large">
        Large
      </Button>
    </div>
  </div>
)

export const Wide: ComponentStory<typeof Button> = () => (
  <Button variant="primary" wide>
    Wide Button
  </Button>
)
