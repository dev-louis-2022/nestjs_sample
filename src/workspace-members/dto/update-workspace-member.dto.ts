import { PartialType } from '@nestjs/swagger';
import { CreateWorkspaceMemberDto } from './create-workspace-member.dto';

export class UpdateWorkspaceMemberDto extends PartialType(CreateWorkspaceMemberDto) {}
