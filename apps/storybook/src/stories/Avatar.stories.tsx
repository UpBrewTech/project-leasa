import { ComponentMeta, ComponentStory } from '@storybook/react'
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

export const Default: ComponentStory<typeof Avatar> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <div>
      <Avatar src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
    </div>
    <div>
      <Avatar />
    </div>
  </div>
)

export const Rounded: ComponentStory<typeof Avatar> = () => (
  <div
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <div>
      <Avatar
        rounded
        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
      />
    </div>
    <div>
      <Avatar rounded />
    </div>
  </div>
)

export const Sizes: ComponentStory<typeof Avatar> = () => (
  <>
    <div
      style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '20px',
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
    <div
      style={{
        display: 'flex',
        gap: '16px',
      }}
    >
      <div>
        <Avatar size="sm" />
      </div>
      <div>
        <Avatar size="md" />
      </div>
      <div>
        <Avatar size="lg" />
      </div>
    </div>
  </>
)
