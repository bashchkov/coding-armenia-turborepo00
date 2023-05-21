import ScrollUp from '@/ui/scroll-up'

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="pt-[700px]">
      <ScrollUp />
    </div>
  )
}
