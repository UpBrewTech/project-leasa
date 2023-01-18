import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Pagination } from 'ui/components/Pagination'

export default {
  title: 'Example/Pagination',
  component: Pagination,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Pagination>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})

Default.args = {
  defaultPage: 1,
  limit: 10,
  total: 100,
}

export const StartOfPage = Template.bind({})
StartOfPage.args = {
  defaultPage: 1,
  limit: 10,
  total: 50,
}

export const EndOfPage = Template.bind({})
EndOfPage.args = {
  defaultPage: 5,
  limit: 10,
  total: 50,
}

export const LargeNumberOfPages = Template.bind({})
LargeNumberOfPages.args = {
  defaultPage: 25,
  limit: 10,
  total: 500,
}
