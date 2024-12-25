import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Contact Us</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <Input type="text" id="name" name="name" required className="mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <Input type="email" id="email" name="email" required className="mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <Textarea id="message" name="message" rows={4} required className="mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <Button type="submit" className="w-full bg-gray-800 text-white dark:bg-white dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-gray-200">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

