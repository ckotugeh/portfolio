export default function Contact() {
  return (
    <section className="p-10">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form action="https://formspree.io/f/yourID" method="POST" className="flex flex-col gap-4 mt-6">
        <input type="text" name="name" placeholder="Your Name" className="border p-2" required />
        <input type="email" name="email" placeholder="Your Email" className="border p-2" required />
        <textarea name="message" placeholder="Your Message" className="border p-2" rows={5} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">Send</button>
      </form>
    </section>
  )
}
