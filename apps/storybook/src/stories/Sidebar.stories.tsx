import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { Sidebar, SidebarLink } from 'ui/components/Sidebar'
import { Typography } from 'ui/components/Typography'

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <StoryWrapper>
    <Sidebar {...args} />
  </StoryWrapper>
)

const StoryWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <div
    style={{
      height: '400px',
      position: 'relative',
    }}
  >
    {children}
  </div>
)

export const Default = Template.bind({})
Default.args = {
  alternative: false,
  children: (
    <>
      <Typography as="h2" variant="title-section" className="text-center p-4">
        sidebar content
      </Typography>
      <SidebarLink href="#" isActive text="Sidebar Link 1" />
      <SidebarLink href="#" text="Sidebar Link 2" />
      <SidebarLink href="#" text="Sidebar Link 3" />
      <SidebarLink href="#" text="Sidebar Link 4" />
    </>
  ),
}

export const Alternative = Template.bind({})
Alternative.args = {
  alternative: true,
  children: (
    <>
      <Typography as="h2" variant="title-section" className="text-center p-4">
        sidebar content
      </Typography>
      <SidebarLink href="#" isActive text="Sidebar Link 1" />
      <SidebarLink href="#" text="Sidebar Link 2" />
      <SidebarLink href="#" text="Sidebar Link 3" />
      <SidebarLink href="#" text="Sidebar Link 4" />
    </>
  ),
}
