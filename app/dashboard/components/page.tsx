import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable'

import {DemoCard} from '@/components/demo-card';
import {Skeleton} from '@/components/ui/skeleton'
import {DemoCalendar} from '@/components/demo-calendar';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {Button} from '@/components/ui/button';
import {Checkbox} from '@/components/ui/checkbox';
import {Select} from '@/components/ui/select';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';

export default function Page() {
  return <>
    <h1 className="text-3xl font-bold">Components</h1>
    <div className="grid grid-cols-4 gap-20 justify-items-center items-center border-slate-200 border p-3">


      <div>
        <h2 className="text-xl font-bold">Calendar</h2>
        <DemoCalendar />
      </div>

      <div>
        <h2 className="text-xl font-bold">Card</h2>
        <DemoCard />
      </div>

      <div>
        <h2 className="text-xl font-bold">Accordion</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <h2 className="text-xl font-bold">Buttons, inputs</h2>
        <div className={'flex gap-3 pt-10'}>
          <Button>Submit</Button>
          <Button variant={'outline'}>Cancel</Button>
          <Button variant={'secondary'}>Back</Button>
          <Checkbox />
          <Label>Check</Label>
          <Select></Select>

        </div>
        <div className={'flex gap-3 pt-10'}>
          <Input />
          <Input />
          <Input />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div>
        <h2 className="text-xl font-bold">Resizable</h2>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>One</ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>Two</ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div>
        <h2 className="text-xl font-bold">Skeleton</h2>
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>

      <div>
        <h2 className="text-xl font-bold">Context menu</h2>
        <ContextMenu>
          <ContextMenuTrigger>Right click</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Profile</ContextMenuItem>
            <ContextMenuItem>Billing</ContextMenuItem>
            <ContextMenuItem>Team</ContextMenuItem>
            <ContextMenuItem>Subscription</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

      </div>


    </div>
  </>
}
