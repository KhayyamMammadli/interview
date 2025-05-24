import { Button, DatePicker, Form, Select, TimePicker, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

const { Option } = Select;

const technologies = ['JavaScript', 'Python', 'Java', 'C#', 'Go', 'Rust'];

const InterviewForm = () => {
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        const data = {
            technology: values.technology,
            date: values.date.format('YYYY-MM-DD'),
            time: values.time.format('HH:mm'),
        };

        const messageText = `Yeni interview sorğusu:
Texnologiya: ${data.technology}
Tarix: ${data.date}
Saat: ${data.time}`;

        axiosInstance.post('/send-message', { text: messageText })
            .then(res => {
                console.log(res.data);
                message.success('Sorğu göndərildi');
                navigate('/success');
            })
            .catch(err => {
                console.error(err);
                message.error('Xəta baş verdi');
            });
    };


    return (
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item name="technology" label="Texnologiya" rules={[{ required: true }]}>
                <Select placeholder="Seçin">
                    {technologies.map((tech) => (
                        <Option key={tech} value={tech}>{tech}</Option>
                    ))}
                </Select>
            </Form.Item>

            <Form.Item name="date" label="Tarix" rules={[{ required: true }]}>
                <DatePicker style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item name="time" label="Saat" rules={[{ required: true }]}>
                <TimePicker format="HH:mm" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">Sorğu Göndər</Button>
            </Form.Item>
        </Form>
    );
};

export default InterviewForm;
