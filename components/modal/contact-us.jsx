import Button from "../button/button";
import Input from "./input";
import DialogModal from "./modal";

export default function ContactUs({onOpen}) {
  return (
    <DialogModal title="Contact us" onClose={onOpen}>
      <form>
        <Input type="text" label="NAME" />
        <Input type="email" label="EMAIL" />
        <Input type="textarea" label="MESSAGE" textarea />
        <p className="flex  gap-6 mt-7 justify-end">
          <Button>Submit</Button>
          <Button onClick={onOpen}>Cancel</Button>
        </p>
      </form>
    </DialogModal>
  );
}
