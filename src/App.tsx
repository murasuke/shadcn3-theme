import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function App() {
  return (
    <div className="max-w-[400px]">
      <form className="m-4 space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="Your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Your email" />
        </div>
        <div>
          <Switch id="newsletter" />
          <Label htmlFor="newsletter" className="ml-2">
            Subscribe to newsletter
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default App;
