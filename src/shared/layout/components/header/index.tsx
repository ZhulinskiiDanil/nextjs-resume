import HeaderComponent from "@/widgets/main/header/ui"
import { createComponent } from "@layout"

export const Header = createComponent({
  Component(props?: any) {
    return <HeaderComponent {...props} />
  }
})