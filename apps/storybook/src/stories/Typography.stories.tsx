import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Typography } from 'ui/components/Typography'

export default {
  title: 'Example/Typography',
  component: Typography,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
  },
} as ComponentMeta<typeof Typography>

export const Default: ComponentStory<typeof Typography> = () => (
  <div>
    <Typography as="h1" variant="title-page">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada
      porta diam, ac lacinia tellus malesuada nec. Nunc maximus aliquet auctor.
    </Typography>
    <Typography as="h2" variant="title-section">
      Morbi sit amet lorem diam. Nullam suscipit eros id rutrum iaculis. Integer
      a sapien pulvinar, vulputate mi at, laoreet ipsum. Quisque ac purus id
      quam aliquam auctor. Phasellus luctus mattis tellus quis commodo. Nullam
      mollis mollis urna, at blandit augue porta non. Nam ut odio tristique,
      pretium lacus sit amet, semper sapien.{' '}
    </Typography>
    <Typography as="h3" variant="title-subsection"></Typography>
    <Typography as="div" variant="label-large">
      Nam arcu urna, mattis vitae leo vel, semper ullamcorper diam. Praesent
      volutpat cursus sem vitae feugiat. Integer efficitur iaculis viverra.
      Aenean tristique maximus sem, sed interdum nunc maximus non.{' '}
    </Typography>
    <Typography as="div" variant="label-medium">
      Sed lobortis lectus sit amet blandit hendrerit. In ultrices diam justo,
      quis dapibus arcu rhoncus eu. Nam varius ipsum laoreet nulla aliquam,
      pretium semper turpis lobortis. Duis nec lacus sapien.{' '}
    </Typography>
    <Typography as="span" variant="label-small">
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Maecenas neque augue, auctor id sagittis in, cursus at ex.
      Nullam consectetur consectetur nulla, id fermentum purus euismod non. Sed
      mauris eros, ornare vel risus gravida, convallis maximus lectus. Fusce
      sodales nisl sit amet neque accumsan placerat. Nulla nec ex nisl. Proin
      aliquam nunc quis mattis euismod. Quisque venenatis urna et neque
      tristique aliquam nec at sem.{' '}
    </Typography>
    <Typography as="p" variant="paragraph-large">
      Proin vitae nisl tortor. Suspendisse augue augue, malesuada et imperdiet
      id, congue at diam. Vivamus mauris arcu, eleifend id varius non, porta vel
      ante. Quisque ullamcorper scelerisque purus nec maximus. Duis eget leo
      justo.{' '}
    </Typography>
    <Typography as="p" variant="paragraph-medium">
      Morbi egestas fringilla orci, in aliquet odio. Suspendisse et dui orci.
      Praesent risus lacus, molestie vitae lacus a, lobortis aliquam ligula.
    </Typography>
    <Typography as="p" variant="paragraph-small">
      Duis justo lorem, pulvinar at bibendum eget, viverra ac ex. Integer
      egestas diam sed nisl commodo, fringilla egestas dui mollis. Nam dapibus
      augue sed metus iaculis mattis. Sed vestibulum, tellus ut mollis
      vestibulum, lectus sapien iaculis leo, nec egestas lacus nisl fringilla
      mauris. Praesent condimentum tortor non finibus consectetur. Nullam
      viverra auctor pretium. Morbi et euismod purus. Vivamus non dignissim
      lectus. Aenean euismod ex libero, a porta turpis fringilla at. Donec
      porttitor, neque non fringilla pulvinar, eros nisl hendrerit ligula, vitae
      maximus magna urna sit amet ex. Donec nec felis justo. Integer interdum
      augue tellus, a imperdiet ipsum molestie non. Nunc maximus eros lectus, in
      iaculis felis sollicitudin in. Sed lacinia urna quam, nec malesuada quam
      consequat in. Nam euismod augue ac arcu faucibus, id ultricies tortor
      porta. Donec et lectus felis. Donec in tincidunt sapien, lacinia egestas
      quam. Aliquam nec facilisis justo. Nulla non augue venenatis, bibendum
      odio vitae, faucibus ante. Suspendisse potenti. Phasellus mollis, massa at
      facilisis tempus, urna odio accumsan felis, in faucibus quam odio in
      felis. Vestibulum ligula velit, sagittis in purus quis, vestibulum rutrum
      eros. Pellentesque vestibulum, dui non commodo volutpat, libero lectus
      tincidunt nunc, nec consectetur nisl eros nec nulla. Class aptent taciti
      sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      Aliquam efficitur tincidunt libero, sit amet semper leo elementum et.
      Vestibulum lorem neque, auctor at condimentum sit amet, molestie vitae
      lectus. Vivamus nisi libero, semper nec pharetra quis, viverra sed massa.
      Praesent et malesuada nisl, id facilisis augue. Donec sed sapien dictum
      orci semper tempor. Phasellus mi enim, laoreet eu placerat ac,
      pellentesque vel purus. In commodo sem vel risus commodo, non dapibus ex
      accumsan.
    </Typography>
  </div>
)

export const TitlePage: ComponentStory<typeof Typography> = () => (
  <Typography variant="title-page">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const TitleSection: ComponentStory<typeof Typography> = () => (
  <Typography variant="title-section">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const TitleSubSection: ComponentStory<typeof Typography> = () => (
  <Typography variant="title-subsection">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const Labellarge: ComponentStory<typeof Typography> = () => (
  <Typography variant="label-large">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const LabelMedium: ComponentStory<typeof Typography> = () => (
  <Typography variant="label-medium">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const LabelSmall: ComponentStory<typeof Typography> = () => (
  <Typography variant="label-small">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const ParagraphLarge: ComponentStory<typeof Typography> = () => (
  <Typography variant="paragraph-large">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const ParagraphMedium: ComponentStory<typeof Typography> = () => (
  <Typography variant="paragraph-medium">
    The quick brown fox jumps over the lazy dog
  </Typography>
)

export const ParagraphSmall: ComponentStory<typeof Typography> = () => (
  <Typography variant="paragraph-small">
    The quick brown fox jumps over the lazy dog
  </Typography>
)
