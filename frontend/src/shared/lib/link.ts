import { GitHub, LinkedIn, Telegram, Instagram, Steam, X } from '@/shared/icons'
import type { ComponentType } from 'svelte'
import site from '@/app/site'

class Link {
	name: string
	href: string
	icon: ComponentType | null

	constructor(name: string, href: string, icon: ComponentType | null) {
		this.name = name
		this.href = href
		this.icon = icon
	}

	getLinks(): { name: string; href: string; icon: ComponentType | null } {
		return {
			name: this.name,
			href: this.href,
			icon: this.icon
		}
	}
}

const professional: Link[] = [
	new Link('GitHub', site.createSite.links.github.href, GitHub),
	new Link('LinkedIn', site.createSite.links.linkedin.href, LinkedIn)
]

const personal: Link[] = [
	new Link('Telegram', site.createSite.links.telegram.href, Telegram),
	new Link('Instagram', site.createSite.links.instagram.href, Instagram),
	new Link('Steam', site.createSite.links.steam.href, Steam),
	new Link('X', site.createSite.links.x.href, X)
]

const link = {
	professional,
	personal
}

export default link
