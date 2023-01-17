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
  <div className="bg-black">
    <StickyHeader className="bg-gray-400" {...args} />
  </div>
)

const defaultProps = {
  children: 'Sticky Header',
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps,
}
