import { ComponentMeta, ComponentStory } from '@storybook/react'
import { PropsWithChildren } from 'react'
import { Button } from 'ui/components/Button'
import { Sidebar } from 'ui/components/Sidebar'
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
  variant: 'primary',
  children: (
    <>
      <Typography as="h2" variant="title-section">
        sidebar content
      </Typography>
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

export const VariantSecondary = Template.bind({})
VariantSecondary.args = {
  variant: 'secondary',
  children: (
    <>
      <Typography as="h2" variant="title-section">
        sidebar content
      </Typography>
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
