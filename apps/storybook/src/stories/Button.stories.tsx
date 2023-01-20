import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button, ButtonProps } from 'ui/components/Button'

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

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button wide={false} {...args} />
)

const defaultProps: ButtonProps = {
  children: 'Button',
  danger: false,
  loading: false,
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

const showAllButtons = (props: ButtonProps) => {
  return (
    <div>
      Variants
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <Button variant="primary" {...props}>
          Primary
        </Button>
        <Button variant="secondary" {...props}>
          Secondary
        </Button>
        <Button variant="text" {...props}>
          Text
        </Button>
      </div>
      Danger
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <Button variant="primary" {...props} disabled>
          Button
        </Button>
        <Button variant="secondary" {...props} disabled>
          Button
        </Button>
        <Button variant="text" {...props} disabled>
          Button
        </Button>
      </div>
      Sizes
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <div>
          <Button variant="primary" size="small" {...props}>
            Small
          </Button>
        </div>
        <div>
          <Button variant="primary" size="regular" {...props}>
            Regular
          </Button>
        </div>
        <div>
          <Button variant="primary" size="large" {...props}>
            Large
          </Button>
        </div>
      </div>
      Wide
      <Button variant="primary" size="large" wide {...props}>
        Wide Button
      </Button>
    </div>
  )
}

export const Disabled: ComponentStory<typeof Button> = () =>
  showAllButtons({
    disabled: true,
  })

export const Loading: ComponentStory<typeof Button> = () =>
  showAllButtons({
    loading: true,
  })
