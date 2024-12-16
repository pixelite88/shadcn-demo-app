import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink, NavigationMenuList,
} from '@/components/ui/navigation-menu'
import {navigationMenuTriggerStyle} from '@/components/ui/navigation-menu'
import Link from 'next/link';


export function DemoNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/components" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Components
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/blocks" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Blocks
            </NavigationMenuLink>
          </Link>
          </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/dashboard/charts" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Charts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
