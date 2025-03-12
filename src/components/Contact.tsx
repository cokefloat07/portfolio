
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Feel free to reach out to me for collaboration, opportunities, or just to say hello!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm interested in freelance opportunities, especially ambitious projects. 
                However, if you have any other requests or questions, don't hesitate to contact me.
              </p>

              <div className="flex flex-col gap-4">
                <Card>
                  <CardContent className="p-4 flex gap-4 items-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-medium">your.email@example.com</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex gap-4 items-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Phone</div>
                      <div className="font-medium">+1 (123) 456-7890</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex gap-4 items-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-medium">New York, NY</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-semibold">Send Me a Message</h3>
              <form className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto self-start">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
