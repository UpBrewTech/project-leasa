import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { Avatar } from 'ui/components/Avatar'
import { Button } from 'ui/components/Button'
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
  <StoryWrapper>
    <StickyHeader {...args} />
  </StoryWrapper>
)

const StoryWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      height: '400px',
      overflow: 'scroll',
    }}
  >
    <div
      style={{
        height: '800px',
        gap: '16px',
        position: 'relative',
      }}
    >
      {children}
      <div style={{ marginTop: '80px' }}> This is a static content </div>
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  profile: <Avatar size="sm" rounded />,
  alternative: false,
  children: (
    <>
      <Button size="small" variant="text">
        Menu 1
      </Button>
      <Button size="small" variant="text">
        Menu 2
      </Button>
      <Button size="small" variant="text">
        Menu 3
      </Button>
    </>
  ),
}

export const AlternativeMode = Template.bind({})
AlternativeMode.args = {
  profile: <Avatar size="sm" />,
  alternative: true,
  children: (
    <>
      <Button size="small" variant="primary">
        Menu 1
      </Button>
      <Button size="small" variant="primary">
        Menu 2
      </Button>
      <Button size="small" variant="primary">
        Menu 3
      </Button>
    </>
  ),
}
