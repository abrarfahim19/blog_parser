import { i18n } from "../i18n"
import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const HightLightNav: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    // <h1 class={classNames(displayClass, "page-title")}>
    //   <a href={baseDir}>{title}</a>
    // </h1>
    <div className={`nav-contatiner`}>
      <a href="/tags" className={`nav-item`}>
        Tags
      </a>
      <a href="/Learning/Learning" className={`nav-item`}>
        Learning
      </a>
      <a href="/Writing/" className={`nav-item`}>
        লেখা
      </a>
    </div>
  )
}

HightLightNav.css = `
.page-title {
  margin: 0;
}
.nav-contatiner {
  display: flex;
  gap: 10px;
}
.nav-item {
  font-size: 19px;
}
`

export default (() => HightLightNav) satisfies QuartzComponentConstructor
