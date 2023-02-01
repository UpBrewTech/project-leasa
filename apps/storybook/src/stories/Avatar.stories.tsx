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
  rounded: false,
  src: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
}

export const Rounded = Template.bind({})
Rounded.args = {
  rounded: true,
  src: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
}

export const Sizes: ComponentStory<typeof Avatar> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <div>
      <Avatar
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        size="sm"
      />
    </div>
    <div>
      <Avatar
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        size="md"
      />
    </div>
    <div>
      <Avatar
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        size="lg"
      />
    </div>
  </div>
)

export const MissingImage = Template.bind({})
MissingImage.args = {}
