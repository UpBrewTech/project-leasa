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
