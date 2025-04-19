import { Body, Html, Container, Tailwind, Button, Img, Heading, Head, Text } from "@react-email/components";


const Email = ({ name, email, number, message, topic, place }) => {

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-12 mx-auto">
          {/* <Img src="https://webtaweb.co/logo.png" className="mx-auto w-[400px]"></Img> */}
          <Container className="p-8 rounded-lg shadow-lg">
            <Heading className=" text-xl pt-4">Hello Advinci 👋 <br />
              You&apos;ve got a message
            </Heading>

            <Text className="text-base">
              Name: {name}
            </Text>

            <Text className="text-base">
              Email: {email}
            </Text>

            <Text className="text-base">
              Phone Number: {number}
            </Text>

            {
              topic && 
              <Text className="text-base">
                Topic: {topic}
              </Text>
            }

            {
              place && 
              <Text className="text-base">
                Place: {place}
              </Text>
            }

            <Text className=" text-lg font-medium text-gray-700 italic">
              &quot;{message}&quot;
            </Text>
          </Container>
        </Body >
      </Tailwind>
    </Html>
  )
}

export default Email;