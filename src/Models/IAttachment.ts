export interface IAttachment {
    attached_file: string;
    created_date: string;
    description: string;
    from_comment: boolean;
    id: number;
    is_deprecated: boolean;
    modified_date: string;
    name: string;
    object_id: number;
    order: number;
    owner: number;
    preview_url: string;
    project: number;
    sha1: string;
    size: number;
    thumbnail_card_url?: null;
    url: string;
}
