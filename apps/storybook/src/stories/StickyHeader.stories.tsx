import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StickyHeader } from 'ui/components/StickyHeader'

export default {
  title: 'Example/StickyHeader',
  component: StickyHeader,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof StickyHeader>

const Template: ComponentStory<typeof StickyHeader> = (args) => (
  <StickyHeader variant="primary" size="md" {...args} />
)

const defaultProps = {
  children: 'Sticky Header',
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
  variant: 'primary',
  size: 'md',
}

export const Variants: ComponentStory<typeof StickyHeader> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      height: '400px',
    }}
  >
    <StickyHeader variant="primary">
      StickyHeader variant="primary"
    </StickyHeader>
    <StickyHeader style={{ top: '100px' }} variant="light">
      StickyHeader variant="light"
    </StickyHeader>
    <StickyHeader style={{ top: '200px' }} variant="dark">
      StickyHeader variant="dark"
    </StickyHeader>
  </div>
)

export const Sizes: ComponentStory<typeof StickyHeader> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      height: '400px',
    }}
  >
    <StickyHeader variant="primary" size="lg">
      StickyHeader size="lg"
    </StickyHeader>
    <StickyHeader style={{ top: '100px' }} variant="primary" size="md">
      StickyHeader size="md"
    </StickyHeader>
    <StickyHeader style={{ top: '200px' }} variant="primary" size="sm">
      StickyHeader size="sm"
    </StickyHeader>
  </div>
)

export const Shadow: ComponentStory<typeof StickyHeader> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
      height: '400px',
    }}
  >
    <StickyHeader variant="light" shadow="sm">
      StickyHeader shadow="sm"
    </StickyHeader>

    <StickyHeader style={{ top: '100px' }} variant="light" shadow="md">
      StickyHeader shadow="md"
    </StickyHeader>
    <StickyHeader style={{ top: '200px' }} variant="light" shadow="lg">
      StickyHeader shadow="lg"
    </StickyHeader>
  </div>
)
