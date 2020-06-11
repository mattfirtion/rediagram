import GraphvizMDX from '@ts-graphviz/mdx';
import { EC2 } from '../components/compute/EC2';
import { Lambda } from '../components/compute/Lambda';
import { S3 } from '../components/storage/S3';
import { IAM } from '../components/security/IAM';
import { AWS } from '../components/groups/AWS';
import { Region } from '../components/groups/Region';
import { AvailabilityZone } from '../components/groups/AvailabilityZone';
import { SecurityGroup } from '../components/groups/SecurityGroup';
import { AutoScalingGroup } from '../components/groups/AutoScalingGroup';
import { VPC } from '../components/groups/VPC';
import { AWSGeneralIcon } from '../components/general/AWSGeneralIcon';

GraphvizMDX.use({
  graphviz: {
    EC2,
    Lambda,
    S3,
    IAM,
    AWS,
    Region,
    AvailabilityZone,
    SecurityGroup,
    AutoScalingGroup,
    VPC,
    AWSGeneralIcon,
  },
});
