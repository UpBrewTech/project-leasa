import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Toggle, ToggleProps } from 'ui/components/Toggle'

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

const STYLE = {
  display: 'flex',
  gap: '16px',
}

export const Default: ComponentStory<typeof Toggle> = (args: ToggleProps) => (
  <div style={STYLE}>
    <Toggle {...args} /> Toggle me
  </div>
)

export const Alternative: ComponentStory<typeof Toggle> = (
  args: ToggleProps
) => (
  <div style={STYLE}>
    <Toggle alternative /> Toggle me
  </div>
)

export const Sizes: ComponentStory<typeof Toggle> = () => (
  <>
    <div style={STYLE}>
      <div style={STYLE}>
        <Toggle size="sm" />
      </div>
      <div style={STYLE}>
        <Toggle size="md" />
      </div>
      <div style={STYLE}>
        <Toggle size="lg" />
      </div>
    </div>
  </>
)
