import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { Avatar } from 'ui/components/Avatar'

export default {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <StoryWrapper>
    <Avatar {...args} />
  </StoryWrapper>
)

const StoryWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      height: '50px',
      width: '50px',
      position: 'relative',
    }}
  >
    {children}
  </div>
)

export const Default = Template.bind({})
Default.args = {
  alternative: false,
  src: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
}

export const Alternative = Template.bind({})
Alternative.args = {
  alternative: true,
  src: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
}

export const Placeholder = Template.bind({})
Placeholder.args = {
  alternative: false,
}
