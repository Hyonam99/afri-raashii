interface SectionBadgeProps {
    text: string
    textColor?: string
}

const SectionBadge = (props: SectionBadgeProps) => {
    const {text, textColor = 'text-white'} = props
  return (
      <div>
          <h2 className={`${textColor} text-xl md:text-2xl`}>{text}</h2>
    </div>
  )
}

export default SectionBadge
