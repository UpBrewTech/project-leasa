import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toggle } from 'ui/components/Toggle'

export default {
  title: 'Example/Toggle',
  component: Toggle,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Toggle>

export const Default: ComponentStory<typeof Toggle> = () => (
  <label
    style={{
      display: 'flex',
      gap: '16px',
    }}
  >
    <Toggle /> Toggle me
  </label>
)
