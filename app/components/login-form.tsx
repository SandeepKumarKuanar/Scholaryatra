import { cn } from "@/lib/utils"
import { Form } from "react-router"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Choose your preferred login method
          </p>
        </div>
        <FieldSeparator>Recall your choice</FieldSeparator>
        <Field>
          {/* LinkedIn icon */}
          <Form method="post">
            <input type="hidden" name="provider" value="linkedin" />
            <Button variant="outline" type="submit" className="w-full">
              <svg
                className="size-6"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#0077B5"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
              Sign in with LinkedIn
            </Button>
          </Form>
          {/* Google icon */}
          <Form method="post">
            <input type="hidden" name="provider" value="google" />
            <Button type="submit" variant="outline" className="w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.98em"
                height="1em"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285f4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34a853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#fbbc05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                ></path>
                <path
                  fill="#eb4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              <span>Sign in with Google</span>
            </Button>
          </Form>
          <FieldDescription className="text-center">
            Facing issues?{" "}
            <a
              href="mailto:kuanarsandeepkumar@gmail.com?subject=%7BWrite%20in%20brief%20the%20issue%20you%20faced%7D&body=Location%3A%0D%0A%7BAt%20what%20point%20in%20the%20interface%20did%20you%20find%20the%20issue%7D%0D%0AIssue%3A%0D%0A%7BYou%20may%20use%20ChatGPT%20or%20so%2C%20but%20the%20issue%20shall%20be%20conveyed%20to%20us%20sincerely%2C%20we%20would%20look%20into%20it%7D%0D%0AMore%20brief%3A%0D%0A%7BMay%20include%20more%20brief%20on%20the%20problems%20you%20faced%2C%20we%20would%20reach%20out%20to%20u%7D%0D%0A%0D%0A%0D%0AThanking%20you%0D%0ABrought%20to%20you%20by%20Scholaryatra"
              className="underline underline-offset-4"
            >
              Contact Us
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
