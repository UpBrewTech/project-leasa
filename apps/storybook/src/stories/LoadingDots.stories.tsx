import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LoadingDots } from 'ui/components/LoadingDots'

export default {
  title: 'Example/LoadingDots',
  component: LoadingDots,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof LoadingDots>

export const Default: ComponentStory<typeof LoadingDots> = () => <LoadingDots />

export const Danger: ComponentStory<typeof LoadingDots> = () => (
  <LoadingDots danger />
)

export const Alternative: ComponentStory<typeof LoadingDots> = () => (
  <div style={{ background: 'black', padding: '2rem' }}>
    <LoadingDots alternative />
  </div>
)
